module.exports = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Module 1: ROS 2 – Robotic Nervous System',
      items: [
        'module-1-ros2/introduction',
        'module-1-ros2/overview',
        'module-1-ros2/ros2-nodes',
        'module-1-ros2/topics-services',
        'module-1-ros2/urdf',
      ],
    },

    {
      type: 'category',
      label: 'Module 2: Digital Twin (Gazebo & Unity)',
      items: [
        'module-2-gazebo/digital-twin',
        'module-2-gazebo/gazebo-basics',
        'module-2-gazebo/sensors',
        'module-2-gazebo/unity',
      ],
    },

    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac Platform',
      items: [
        'module-3-isaac/isaac-overview',
        'module-3-isaac/isaac-sim',
        'module-3-isaac/isaac-ros',
        'module-3-isaac/nav2',
      ],
    },

    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module-4-vla/vla-intro',
        'module-4-vla/voice-to-action',
        'module-4-vla/llm-planning',
      ],
    },

    {
      type: 'category',
      label: 'Capstone Project',
      items: ['capstone/autonomous-humanoid'],
    },
  ],
};
