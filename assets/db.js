/* =========================================================================
   RA.DB — the student portal and admin panel, static demo.
   Sample data kept in this browser only. Nothing is sent to any server.
   ========================================================================= */
(function () {
'use strict';
const RA = window.RA = window.RA || {};
const C = window.RA_CONFIG || {};
const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { } }
};
const LEVELS = { '5054': 'O Level 5054', '0625': 'IGCSE 0625', '9702-AS': 'AS Level 9702', '9702-A2': 'A2 Level 9702', all: 'All levels' };
function device() {
  let d = ls.get('ya-device', null);
  if (!d) { d = 'd' + Math.random().toString(36).slice(2) + Date.now().toString(36); ls.set('ya-device', d); }
  const ua = navigator.userAgent, b = /Edg\//.test(ua) ? 'Edge' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox\//.test(ua) ? 'Firefox' : 'Browser';
  const o = /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iOS' : /Windows/.test(ua) ? 'Windows' : /Mac OS/.test(ua) ? 'Mac' : 'device';
  return { id: d, label: b + ' on ' + o };
}

/* ------------------------------------------------------------ preview (this browser only) */
function preview() {
  const KEY = 'ya-demo-db';
  const now = () => new Date().toISOString();
  function seed() {
    const t0 = Date.now(), iso = d => new Date(t0 - d * 864e5).toISOString();
    const L = []; let id = 1;
    const add = (level, topic, n, title, kind, minutes, video, free) => L.push({ id: id++, level, topic, n, title, kind, minutes, video: video || '', notes: '', free: !!free, published: true, created_at: iso(30 - id) });
    [['1.2', 'Motion graphs: gradients and areas'], ['1.5.1', 'Free-body diagrams and F = ma'], ['1.6', 'Momentum and impulse'], ['1.7.1', 'Energy stores and transfers'], ['2.2.2', 'Specific heat capacity, with the practical'], ['3.2.2', 'Refraction and total internal reflection'], ['4.3.2', 'Series and parallel circuits'], ['5.2.5', 'Half-life from a decay curve']].forEach((x, k) => add('5054', x[0], 1, x[1], 'lecture', 45 + k * 5));
    add('5054', '', 1, 'Paper 4 walk-through: Alternative to Practical skills', 'solution', 60, '', true);
    [['1.5.1', 'Effects of forces (Core and Supplement)'], ['3.2.3', 'Thin lenses and ray diagrams'], ['4.5.6', 'The transformer'], ['6.2.3', 'Redshift and the Big Bang']].forEach((x, k) => add('0625', x[0], 1, x[1], 'lecture', 45 + k * 5));
    [['1.3', 'Errors and uncertainties'], ['2.1', 'Kinematics and projectiles'], ['3.3', 'Momentum in two dimensions'], ['8.3', 'Interference and the double slit'], ['10.2', 'Kirchhoff’s laws']].forEach((x, k) => add('9702-AS', x[0], 1, x[1], 'lecture', 50 + k * 5));
    [['13.4', 'Gravitational potential'], ['17.1', 'Simple harmonic motion'], ['19.3', 'Capacitor discharge and the time constant'], ['22.2', 'The photoelectric effect']].forEach((x, k) => add('9702-A2', x[0], k + 1, x[1], 'lecture', 55 + k * 5));
    ['O Level · Revision 1 · Motion, forces and energy', 'O Level · Revision 2 · Electricity'].forEach(t => add('5054', '', 1, t, 'workshop', 90));
    ['AS · Revision 1 · Waves and superposition', 'AS · Revision 2 · D.C. circuits'].forEach(t => add('9702-AS', '', 1, t, 'workshop', 90));
    ['A2 · Revision 1 · Fields', 'A2 · Revision 2 · Paper 5 planning'].forEach(t => add('9702-A2', '', 1, t, 'workshop', 90));
    return {
      seq: 1003, lseq: id, aseq: 3, mseq: 5, rseq: 2,
      students: [
        { id: 'YA-1001', name: 'Sample Student', level: '9702-AS', phone: '', code: 'DEMO-2026', active: true, expires_at: null, last_login: null, created_at: iso(20) },
        { id: 'YA-1002', name: 'Second Sample', level: '5054', phone: '', code: 'DEMO-5054', active: true, expires_at: null, last_login: null, created_at: iso(12) }
      ],
      lectures: L,
      announcements: [
        { id: 1, level: 'all', title: 'Preview mode', body: 'This portal is a demo. Everything you see is sample data saved only in this browser. In the live version, the lectures, announcements and marks Sir Yawar’s team adds in the admin panel appear here.', pinned: true, published: true, created_at: iso(1) },
        { id: 2, level: '9702-AS', title: 'Sample notice for AS students', body: 'Announcements can be sent to one level or to everyone.', pinned: false, published: true, created_at: iso(4) }
      ],
      marks: [
        { id: 1, student_id: 'YA-1001', title: 'Sample test: Paper 1 practice', paper: 'P1', score: 27, out_of: 40, taken_on: iso(25).slice(0, 10), remarks: 'Sample entry' },
        { id: 2, student_id: 'YA-1001', title: 'Sample test: kinematics', paper: 'P2', score: 34, out_of: 60, taken_on: iso(18).slice(0, 10), remarks: '' },
        { id: 3, student_id: 'YA-1001', title: 'Sample test: electricity', paper: 'P2', score: 41, out_of: 60, taken_on: iso(10).slice(0, 10), remarks: '' },
        { id: 4, student_id: 'YA-1001', title: 'Sample mock: Paper 2', paper: 'P2', score: 47, out_of: 60, taken_on: iso(3).slice(0, 10), remarks: 'Sample entry' }
      ],
      progress: [{ student_id: 'YA-1001', lecture_id: 14 }, { student_id: 'YA-1001', lecture_id: 15 }],
      registrations: [{ id: 1, created_at: iso(2), name: 'Sample enquiry', phone: '0300 0000000', email: '', level: '5054', mode: 'Online', session: 'May/June 2027', message: 'This is a sample registration in the demo.', source: 'contact', status: 'new' }],
      sessions: []
    };
  }
  let db = ls.get(KEY, null); if (!db) { db = seed(); ls.set(KEY, db); }
  const save = () => ls.set(KEY, db);
  const wait = v => new Promise(r => setTimeout(() => r(v), 180));
  const stu = tok => { const s = db.sessions.find(x => x.token === tok); return s && db.students.find(x => x.id === s.student_id && x.active); };
  const code = () => { const a = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s = ''; for (let i = 0; i < 8; i++) s += a[Math.floor(Math.random() * a.length)]; return s.slice(0, 4) + '-' + s.slice(4); };
  const tables = { students: 'id', lectures: 'id', announcements: 'id', marks: 'id', registrations: 'id' };
  return {
    mode: 'preview',
    reset() { db = seed(); save(); },
    async login(id, c) {
      const s = db.students.find(x => x.id === String(id).trim().toUpperCase());
      if (!s || String(c).replace(/[^A-Z0-9]/gi, '').toUpperCase() !== s.code.replace(/-/g, '')) return wait({ ok: false, error: 'bad_credentials' });
      if (!s.active) return wait({ ok: false, error: 'inactive' });
      const token = 't' + Math.random().toString(36).slice(2); db.sessions.push({ token, student_id: s.id }); s.last_login = now(); save();
      return wait({ ok: true, token, student_id: s.id, name: s.name, level: s.level });
    },
    async logout(tok) { db.sessions = db.sessions.filter(x => x.token !== tok); save(); },
    async home(tok) {
      const s = stu(tok); if (!s) return wait({ ok: false, error: 'session' });
      return wait({ ok: true, name: s.name, level: s.level, student_id: s.id,
        lectures: db.lectures.filter(l => l.published && (l.level === 'all' || l.level === s.level)).map(l => ({ id: l.id, topic: l.topic, n: l.n, title: l.title, kind: l.kind, minutes: l.minutes, free: l.free, has_video: !!l.video, has_notes: !!l.notes })),
        done: db.progress.filter(p => p.student_id === s.id).map(p => p.lecture_id),
        announcements: db.announcements.filter(a => a.published && (a.level === 'all' || a.level === s.level)).sort((a, b) => (b.pinned - a.pinned) || b.created_at.localeCompare(a.created_at)),
        marks: db.marks.filter(m => m.student_id === s.id).sort((a, b) => a.taken_on.localeCompare(b.taken_on)) });
    },
    async lecture(tok, id) { const s = stu(tok); if (!s) return wait({ ok: false, error: 'session' }); const l = db.lectures.find(x => x.id === +id); return wait(l ? { ok: true, video: l.video, notes: l.notes } : { ok: false, error: 'not_found' }); },
    async progress(tok, id, done) { const s = stu(tok); if (!s) return wait({ ok: false }); db.progress = db.progress.filter(p => !(p.student_id === s.id && p.lecture_id === +id)); if (done) db.progress.push({ student_id: s.id, lecture_id: +id }); save(); return wait({ ok: true }); },
    async register(row) { db.registrations.unshift(Object.assign({ id: db.rseq++, created_at: now(), status: 'new' }, row)); save(); return wait({ ok: true }); },
    admin: {
      email: 'preview',
      signedIn: () => !!ls.get('ya-admin-preview', false),
      async signIn() { ls.set('ya-admin-preview', true); return wait(true); },
      signOut() { ls.del('ya-admin-preview'); },
      async list(t) { const k = tables[t]; const rows = (db[t] || []).slice(); return wait(t === 'students' ? rows.map(r => Object.assign({}, r, { code: undefined })) : rows); },
      async insert(t, row) { const seqk = { lectures: 'lseq', announcements: 'aseq', marks: 'mseq', registrations: 'rseq' }[t]; const r = Object.assign({ id: db[seqk]++, created_at: now() }, row); db[t].unshift(r); save(); return wait([r]); },
      async update(t, id, patch) { const r = db[t].find(x => String(x.id) === String(id)); if (r) Object.assign(r, patch); save(); return wait([r]); },
      async remove(t, id) { db[t] = db[t].filter(x => String(x.id) !== String(id)); if (t === 'students') { db.marks = db.marks.filter(m => m.student_id !== id); db.sessions = db.sessions.filter(s => s.student_id !== id); } save(); return wait(null); },
      async createStudent(name, level, phone, expires) { const id = 'YA-' + (db.seq++), c = code(); db.students.unshift({ id, name, level, phone: phone || '', code: c, active: true, expires_at: expires || null, last_login: null, created_at: now() }); save(); return wait({ id, code: c }); },
      async resetCode(id) { const s = db.students.find(x => x.id === id), c = code(); if (s) s.code = c; db.sessions = db.sessions.filter(x => x.student_id !== id); save(); return wait({ id, code: c }); },
      async resetDevices(id) { db.sessions = db.sessions.filter(x => x.student_id !== id); save(); return wait({ ok: true }); }
    }
  };
}

RA.LEVELS = LEVELS;
RA.DB = preview();
})();

