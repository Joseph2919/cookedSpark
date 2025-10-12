const handleSubmit = async () => {
  if (!title.trim() || !description.trim()) {
    showToast('❌ Please fill all fields');
    return;
  }

  try {
    const response = await fetch('https://cookedspark.onrender.com/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: title, email: description }),
    });

    const data = await response.json();

    if (data.success) {
      showToast('✅ Bravo... Submitted!');
      setTitle('');
      setDescription('');
    } else {
      showToast('❌ ' + (data.message || 'Something went wrong'));
    }
  } catch (error) {
    console.error('❌ API Error:', error);
    showToast('⚠️ Could not connect to backend');
  }
};
