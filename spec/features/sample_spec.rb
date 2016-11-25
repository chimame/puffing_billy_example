require 'rails_helper'

feature 'Samples spec' do
  scenario 'example.comが2件のデータを返して、表示されること' do
    visit '/samples'
    proxy.stub("http://example.com/api").and_return(
      headers: { 'Access-Control-Allow-Origin'  => '*' },
      json:    {test: [1,2]},
      code:    200,
    )
    click_button 'fetch data'
    expect(all('p').count).to eq 2
  end

  scenario 'example.comが3件のデータを返して、表示されること' do
    visit '/samples'
    proxy.stub("http://example.com/api").and_return(
      headers: { 'Access-Control-Allow-Origin'  => '*' },
      json:    {test: ["a","b","c"]},
      code:    200,
    )
    click_button 'fetch data'
    expect(all('p').count).to eq 3
  end
end
