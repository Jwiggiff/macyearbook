require 'liquid'
require 'uri'

# Capitalize each word
module Jekyll
  module TitleCase
    def title_case(words)
      return words.split(' ').map(&:capitalize).join(' ')
    end
  end
end

Liquid::Template.register_filter(Jekyll::TitleCase)