// GradTrip App Logic
(function() {
  'use strict';

  // ===== Mock Data =====
  const groups = [
    {
      id: 1,
      title: '川大毕业季·稻城亚丁6日游',
      dest: '成都',
      desc: '四川大学计算机学院8人小队，还差2人！会拍照的小伙伴优先~',
      date: '06/15出发',
      days: '6天5晚',
      budget: '¥2,800/人',
      members: 6,
      maxMembers: 8,
      from: '四川大学',
      tags: [
        { text: '# 摄影党', type: 'pink' },
        { text: '# 毕业必去', type: 'orange' }
      ],
      avatar: '🏔️',
      avatarBg: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
      members_list: [
        { name: '小', color: '#6366f1' },
        { name: '红', color: '#ec4899' },
        { name: '张', color: '#10b981' },
        { name: '李', color: '#f59e0b' },
        { name: '王', color: '#8b5cf6' },
        { name: '陈', color: '#ef4444' }
      ]
    },
    {
      id: 2,
      title: '三亚毕业海岛趴·4天3晚',
      dest: '三亚',
      desc: '北大清华联合团！阳光沙滩海浪，就差你啦~',
      date: '06/20出发',
      days: '4天3晚',
      budget: '¥3,500/人',
      members: 5,
      maxMembers: 8,
      from: '北京',
      tags: [
        { text: '# 海岛控', type: 'pink' },
        { text: '# 名校联合', type: 'green' }
      ],
      avatar: '🏖️',
      avatarBg: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      members_list: [
        { name: '林', color: '#3b82f6' },
        { name: '徐', color: '#ec4899' },
        { name: '孙', color: '#10b981' },
        { name: '周', color: '#8b5cf6' },
        { name: '吴', color: '#f59e0b' }
      ]
    },
    {
      id: 3,
      title: '西安古都探秘·吃货团',
      dest: '西安',
      desc: '武汉出发，兵马俑+回民街+大唐不夜城，吃遍长安！',
      date: '06/18出发',
      days: '3天2晚',
      budget: '¥1,580/人',
      members: 4,
      maxMembers: 6,
      from: '武汉大学',
      tags: [
        { text: '# 吃货团', type: 'orange' },
        { text: '# 短途游', type: 'green' }
      ],
      avatar: '🏛️',
      avatarBg: 'linear-gradient(135deg, #34d399, #10b981)',
      members_list: [
        { name: '黄', color: '#f59e0b' },
        { name: '朱', color: '#ef4444' },
        { name: '胡', color: '#8b5cf6' },
        { name: '郭', color: '#10b981' }
      ]
    },
    {
      id: 4,
      title: '大理风花雪月·慢节奏之旅',
      dest: '大理',
      desc: '浙大文艺青年团，环洱海骑行、古城发呆、看苍山雪',
      date: '06/22出发',
      days: '6天5晚',
      budget: '¥2,680/人',
      members: 7,
      maxMembers: 10,
      from: '浙江大学',
      tags: [
        { text: '# 文艺范', type: 'pink' },
        { text: '# 休闲游', type: '' }
      ],
      avatar: '🌸',
      avatarBg: 'linear-gradient(135deg, #f472b6, #ec4899)',
      members_list: [
        { name: '何', color: '#ec4899' },
        { name: '高', color: '#6366f1' },
        { name: '罗', color: '#10b981' },
        { name: '梁', color: '#f59e0b' },
        { name: '宋', color: '#8b5cf6' },
        { name: '唐', color: '#14b8a6' },
        { name: '韩', color: '#f472b6' }
      ]
    },
    {
      id: 5,
      title: '青岛海滨毕业行·啤酒海鲜',
      dest: '青岛',
      desc: '山东大学出发，吹海风喝啤酒吃海鲜，毕业就要嗨！',
      date: '06/25出发',
      days: '3天2晚',
      budget: '¥1,280/人',
      members: 5,
      maxMembers: 8,
      from: '山东大学',
      tags: [
        { text: '# 海边', type: '' },
        { text: '# 性价比', type: 'green' }
      ],
      avatar: '🌊',
      avatarBg: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
      members_list: [
        { name: '冯', color: '#3b82f6' },
        { name: '邓', color: '#ef4444' },
        { name: '曹', color: '#10b981' },
        { name: '彭', color: '#8b5cf6' },
        { name: '曾', color: '#f59e0b' }
      ]
    },
    {
      id: 6,
      title: '重庆8D魔幻之旅·网红打卡',
      dest: '重庆',
      desc: '川外姐妹团，洪崖洞、解放碑、磁器口，拍爆内存卡！',
      date: '06/17出发',
      days: '4天3晚',
      budget: '¥1,880/人',
      members: 3,
      maxMembers: 6,
      from: '四川外国语',
      tags: [
        { text: '# 网红打卡', type: 'orange' },
        { text: '# 女生优先', type: 'pink' }
      ],
      avatar: '🎡',
      avatarBg: 'linear-gradient(135deg, #fb923c, #f97316)',
      members_list: [
        { name: '萧', color: '#f97316' },
        { name: '程', color: '#ec4899' },
        { name: '蔡', color: '#8b5cf6' }
      ]
    }
  ];

  const expenses = [
    { name: '包车费用（6天）', category: 'transport', amount: 3600, payer: '小明同学', date: '06/10', icon: '🚗', iconClass: 'icon-transport', detail: '12座商务车 × 6天' },
    { name: '酒店住宿（5晚）', category: 'hotel', amount: 4800, payer: '小红', date: '06/12', icon: '🏨', iconClass: 'icon-hotel', detail: '8人标间 × 5晚' },
    { name: '稻城亚丁门票', category: 'ticket', amount: 2080, payer: '小明同学', date: '06/14', icon: '🎫', iconClass: 'icon-ticket', detail: '景区门票+观光车 × 8人' },
    { name: '蜀大侠火锅', category: 'food', amount: 685, payer: '张伟', date: '06/15', icon: '🍲', iconClass: 'icon-food', detail: 'D1晚餐 · 8人' },
    { name: '康定藏式午餐', category: 'food', amount: 480, payer: '李娜', date: '06/16', icon: '🍜', iconClass: 'icon-food', detail: 'D2午餐 · 8人' },
    { name: '氧气罐×10', category: 'other', amount: 350, payer: '王磊', date: '06/16', icon: '🧴', iconClass: 'icon-other', detail: '高原物资采购' },
    { name: '新都桥住宿', category: 'hotel', amount: 1200, payer: '小红', date: '06/16', icon: '🏨', iconClass: 'icon-hotel', detail: 'D2晚 · 8人' },
    { name: '亚丁村住宿', category: 'hotel', amount: 2400, payer: '小红', date: '06/17', icon: '🏨', iconClass: 'icon-hotel', detail: 'D3-D4晚 · 8人' },
    { name: '高反药+晕车药', category: 'other', amount: 256, payer: '陈静', date: '06/14', icon: '💊', iconClass: 'icon-other', detail: '团队常备药品' },
    { name: '牛奶海骑马', category: 'ticket', amount: 720, payer: '小明同学', date: '06/18', icon: '🐎', iconClass: 'icon-ticket', detail: '6人骑马往返' }
  ];

  const settlements = [
    { from: '张伟', to: '小明同学', amount: 356.50, fromColor: '#10b981', toColor: '#6366f1' },
    { from: '李娜', to: '小红', amount: 580.20, fromColor: '#f59e0b', toColor: '#ec4899' },
    { from: '王磊', to: '小明同学', amount: 720.81, fromColor: '#3b82f6', toColor: '#6366f1' },
    { from: '陈静', to: '小红', amount: 410.30, fromColor: '#8b5cf6', toColor: '#ec4899' },
    { from: '刘洋', to: '小明同学', amount: 285.60, fromColor: '#ef4444', toColor: '#6366f1' }
  ];

  // ===== Page Navigation =====
  window.switchPage = function(pageName) {
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.page === pageName);
    });

    // Update bottom nav
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageName);
    });

    // Update pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.toggle('active', page.id === 'page-' + pageName);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ===== Group Rendering =====
  function renderGroupCard(group) {
    const tagsHtml = group.tags.map(t =>
      `<span class="tag ${t.type ? 'tag-' + t.type : ''}">${t.text}</span>`
    ).join('');

    const membersHtml = group.members_list.slice(0, 4).map(m =>
      `<div class="member-avatar" style="background: ${m.color};">${m.name}</div>`
    ).join('');

    const remaining = group.maxMembers - group.members;
    const remainingHtml = remaining > 0
      ? `<div class="member-avatar" style="background: var(--rule); color: var(--muted);">+${remaining}</div>`
      : '';

    return `
      <div class="group-card" data-dest="${group.dest}">
        <div class="group-avatar" style="background: ${group.avatarBg};">${group.avatar}</div>
        <div class="group-info">
          <div class="group-title">${group.title}</div>
          <div class="group-desc">${group.desc}</div>
          <div class="group-tags">${tagsHtml}</div>
        </div>
        <div class="group-members">
          ${membersHtml}
          ${remainingHtml}
        </div>
        <div class="group-meta" style="text-align: right; margin-right: 16px;">
          <div style="font-size: 12px; color: var(--muted);">${group.date} · ${group.days}</div>
          <div style="font-size: 14px; font-weight: 700; color: var(--accent2);">${group.budget}</div>
          <div style="font-size: 11px; color: var(--muted);">${group.from}</div>
        </div>
        <div class="group-action">
          <button class="btn btn-accent btn-sm" onclick="joinGroup(${group.id})">
            ${remaining > 0 ? '加入拼团' : '已满员'}
          </button>
        </div>
      </div>
    `;
  }

  function renderGroups(containerId, groupList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = groupList.map(renderGroupCard).join('');
  }

  // ===== Filtering =====
  window.filterGroups = function() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const dest = document.getElementById('filterDest').value;
    const time = document.getElementById('filterTime').value;
    const budget = document.getElementById('filterBudget').value;

    let filtered = groups.filter(g => {
      if (search && !g.title.toLowerCase().includes(search) && !g.desc.toLowerCase().includes(search) && !g.from.toLowerCase().includes(search)) {
        return false;
      }
      if (dest && g.dest !== dest) return false;
      return true;
    });

    renderGroups('group-list', filtered);
  };

  // ===== Join Group =====
  window.joinGroup = function(id) {
    const group = groups.find(g => g.id === id);
    if (group) {
      const remaining = group.maxMembers - group.members;
      if (remaining > 0) {
        showToast(`已申请加入「${group.title}」`);
      } else {
        showToast('该团已满员，加入候补队列');
      }
    }
  };

  // ===== Create Group =====
  window.openCreateModal = function() {
    document.getElementById('createModal').classList.add('active');
  };

  window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
  };

  window.createGroup = function() {
    const name = document.getElementById('groupName').value;
    if (!name) {
      showToast('请填写团名');
      return;
    }
    showToast('🎉 拼团发布成功！快去分享给小伙伴吧');
    closeModal('createModal');
    switchPage('groups');
  };

  // ===== Expense =====
  function renderExpenses() {
    const container = document.getElementById('expense-list');
    if (!container) return;

    container.innerHTML = expenses.map(e => `
      <div class="expense-item">
        <div class="expense-icon ${e.iconClass}">${e.icon}</div>
        <div class="expense-info">
          <div class="expense-name">${e.name}</div>
          <div class="expense-detail">${e.detail} · ${e.date}</div>
        </div>
        <div>
          <div class="expense-amount">¥${e.amount.toFixed(2)}</div>
          <div class="expense-payer">${e.payer} 垫付</div>
        </div>
      </div>
    `).join('');
  }

  // Category picker
  document.addEventListener('click', function(e) {
    if (e.target.closest('.cat-btn')) {
      const btn = e.target.closest('.cat-btn');
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  });

  window.addExpense = function() {
    const name = document.getElementById('expenseName').value;
    const amount = document.getElementById('expenseAmount').value;
    if (!name || !amount) {
      showToast('请填写消费名称和金额');
      return;
    }
    showToast(`✅ 已记账：${name} ¥${amount}`);
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseNote').value = '';
  };

  // ===== Settlement =====
  window.openSettleModal = function() {
    const list = document.getElementById('settlement-list');
    list.innerHTML = settlements.map(s => `
      <div class="settlement-item">
        <div class="from">
          <div class="member-avatar" style="background: ${s.fromColor}; margin-left: 0; width: 28px; height: 28px; font-size: 11px;">${s.from.charAt(0)}</div>
          <span>${s.from}</span>
        </div>
        <span class="arrow">→</span>
        <div class="to">
          <div class="member-avatar" style="background: ${s.toColor}; margin-left: 0; width: 28px; height: 28px; font-size: 11px;">${s.to.charAt(0)}</div>
          <span>${s.to}</span>
        </div>
        <div class="amount">¥${s.amount.toFixed(2)}</div>
      </div>
    `).join('');

    document.getElementById('settleModal').classList.add('active');
  };

  // ===== Toast =====
  window.showToast = function(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  };

  // ===== ECharts =====
  function initCharts() {
    if (typeof echarts === 'undefined') return;

    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--accent').trim();
    const accent2 = style.getPropertyValue('--accent2').trim();
    const ink = style.getPropertyValue('--ink').trim();
    const muted = style.getPropertyValue('--muted').trim();

    const pieChart = echarts.init(document.getElementById('chart-expense-pie'), null, { renderer: 'svg' });
    pieChart.setOption({
      animation: false,
      tooltip: {
        trigger: 'item',
        appendToBody: true,
        formatter: '{b}: ¥{c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        textStyle: { color: muted, fontSize: 12 },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 12
      },
      series: [{
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: { show: false },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold',
            color: ink
          }
        },
        labelLine: { show: false },
        data: [
          { value: 8400, name: '住宿', itemStyle: { color: '#6366f1' } },
          { value: 5200, name: '交通', itemStyle: { color: '#10b981' } },
          { value: 4280, name: '餐饮', itemStyle: { color: '#f59e0b' } },
          { value: 2800, name: '门票', itemStyle: { color: '#ec4899' } },
          { value: 1206, name: '物资', itemStyle: { color: '#8b5cf6' } },
          { value: 600, name: '其他', itemStyle: { color: '#64748b' } }
        ]
      }]
    });

    window.addEventListener('resize', function() {
      pieChart.resize();
    });
  }

  // ===== Close modal on overlay click =====
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  // ===== Init =====
  function init() {
    // Render recommended groups (first 3)
    renderGroups('recommended-groups', groups.slice(0, 3));

    // Render all groups
    renderGroups('group-list', groups);

    // Render expenses
    renderExpenses();

    // Init charts
    if (document.getElementById('chart-expense-pie')) {
      initCharts();
    }

    // Set default date
    const dateInput = document.getElementById('groupDate');
    if (dateInput) {
      const today = new Date();
      today.setDate(today.getDate() + 7);
      dateInput.value = today.toISOString().split('T')[0];
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
