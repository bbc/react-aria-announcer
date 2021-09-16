import React from 'react';
import { mount } from 'enzyme';
import { HiddenMessages } from '../src/HiddenMessages';

describe('hiddenMessages', () => {
  it('initially renders MessageA', () => {
    const message = 'moving on up';
    const wrapper = mount(<HiddenMessages message={message} timeStamp={1} />);

    const messageA = wrapper.find('.messageA');
    expect(messageA).toHaveLength(1);
    expect(messageA.text()).toEqual(message);
    expect(wrapper.find('.messageB')).toHaveLength(0);
  });

  it('renders MessageB when timestamp is updated', () => {
    const message1 = 'moving on up';
    const message2 = 'moving on out';
    const wrapper = mount(<HiddenMessages message={message1} timeStamp={1} />);
    
    wrapper.setProps({
      message: message2,
      timeStamp: 2,
    });
    wrapper.update();

    expect(wrapper.find('.messageA')).toHaveLength(0);
    const messageB = wrapper.find('.messageB');
    expect(messageB).toHaveLength(1);
    expect(messageB.text()).toEqual(message2);
  });
});
