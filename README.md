# postcss-flexbox
PostCSS Flexbox provides an easy to use option for using CSS3 Flexbox layouts. This is supported by IE 10+ and all evergreen browsers.

## Installation
npm install postcss-flexbox

## Dependencies
[PostCSS Autoprefixer](https://github.com/postcss/autoprefixer)

Please add autoprefixer after postcss-flexbox. This will ensure all the appropriate vendor prefixes are added. Flexbox is not supported without these prefixes in some browsers yet. Please refer [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) for detailed information.

## Usage
CSS3 Flexbox lets you set the layout for container divs: horizontal alignment of children or vertical. The children can in turn choose the space they occupy in the container and the alignment as well. Below are examples to show how this works. [Here is a detailed blogpost I wrote on building using Flexbox in Coursera's tech blog](https://tech.coursera.org/blog/2015/06/23/flexbox-at-work/)

postcss-flexbox offers 2 props to set on a selector:

1. box : This is to make a HTML element a flexbox
   Below are the values it can take. Please provide these values separated by a empty space.
   Provide a combination of these values and see the wonders of Flexbox working effortlessly. 

   One of the following options is necessary to specify the direction of laying things out:
   1. horizontal
   2. horizontal-reverse
   3. vertical
   4. vertical-reverse

   Here are the rest of the options which will apply based on the direction:
   
   1. top
   2. bottom
   3. left
   4. right
   5. middle (vertical center)
   6. center (horizontal center)
   7. space-around
   8. space-between
   9. wrap
   10. wrap-reverse
   
2. box-item : This is to align or adjust size of elements within a flexbox.
   Here are the list of options. Please specify them with a space between.
   You can provide the alignment option like top or right along with the size option like flex-1. 
   Use a combination of these. 

   1. top
   2. bottom
   3. right
   4. left
   5. middle
   6. center
   7. stretch
   8. flex-auto
   9. flex-1 ... flex-12
   10. flex-none

### Horizontal box
    .horizontal-box {
      box: horizontal;
    }
![HorizontalBox](https://lh3.googleusercontent.com/-aSnIdPAty78/VoCc3jOo0eI/AAAAAAAAOv0/7UMisdT-YSk/s1024-Ic42/snapshot1.png "Horizontal Box")

## Horizontal box + items centered
    .horizontal-box.align-items-center {
       box: horizontal center;
    }
![Horizontal Box Items Centered](https://lh3.googleusercontent.com/-Q2Umh0TOeBE/VoCc4X-BvDI/AAAAAAAAOv8/sLsPCjvSQOc/s1016-Ic42/snapshot2.png "Horizontal Box Items Centered")

## Horizontal box + items centered at the bottom
    .horizontal-box.align-items-bottom-center {
       box: horizontal bottom center;
    }
![Horizontal Box Items Centered at Bottom](https://lh3.googleusercontent.com/-ldkAKXJxMEk/VoCc447MEMI/AAAAAAAAOwA/vugH4TyvQx4/s1024-Ic42/snapshot3.png "Horizontal Box Items Centered at Bottom")

## Horizontal box + items with space between
    .horizontal-box.align-items-space-between {
      box: horizontal space-between;
    }
![Horizontal Box with space between](https://lh3.googleusercontent.com/-7CGd7I_CmeI/VoCfpUBJ9MI/AAAAAAAAOw0/AOdArcV--j4/s1016-Ic42/snapshot4.png "Horizontal box with space between items")

## Horizontal box + space around items
    .horizontal-box.align-items-space-around {
      box: horizontal space-around;
    }
![Horizontal Box with space around](https://lh3.googleusercontent.com/-kKDwSrYOPkU/VoChEgjw4fI/AAAAAAAAOxE/gzSvwOnv0og/s1018-Ic42/snapshot5.png "Horizontal box with space around items")

## Horizontal Box + align items bottom right
    .horizontal-box.align-items-bottom-right {
      box: horizontal bottom right;
    }
![Horizontal Box with items in bottom right and items](https://lh3.googleusercontent.com/-641BL1qkDKs/VoCiW8RLCgI/AAAAAAAAOxQ/ufAy18jQ92M/s1018-Ic42/snapshot6.png "Horizontal box with items aligned bottom right")

## Horizontal Box with items in the ratio 1:2:auto
    .horizontal-box {
      box: horizontal;
    }

    .first {
      box-item: flex-1;
    }

    .second {
      box-item: flex-2;
    }
![Horizontal Box with items 1:2:auto](https://lh3.googleusercontent.com/-GMt9tFFaavE/VoClKYn8cnI/AAAAAAAAOxs/5RuoFcH7vnk/s1016-Ic42/snapshot7.png "Horizontal box with items in 1:auto:auto")

## Horizontal Box : align items individually
    .horizontal-box{
      box: horizontal;
    }
    .first, .second, .third, .fourth {
      box-item: flex-1;
    }
    .first {
      box-item: top;
    }
    .second {
      box-item: center;
    }
    .third {
      box-item: stretch;
    }
    .fourth {
      box-item: bottom;
    }
![Horizontal Box with items aligned individually](https://lh3.googleusercontent.com/-M6Whv0ekXJc/VoCmXPxgGCI/AAAAAAAAOx4/6VSn7cuCNkU/s1016-Ic42/snapshot8.png "Horizontal box with items aligned individually")

## Horizontal box wrap items
    .horizontal-box {
      box: horizontal wrap;
    }
![Horizontal Box with items wrapped for smaller widths](https://lh3.googleusercontent.com/-rUa839zO1fA/VoCp14NQbZI/AAAAAAAAOyE/1tJnDZ3x1hs/s376-Ic42/snapshot9.png "Horizontal box with items wrapped for smaller widths")

## Vertical box with items in ratio auto:1:auto
    .vertical-box {
      box: vertical;
    }
    .second {
      box-item: flex-1;
    }
![Vertical Box with items auto:1:auto](https://lh3.googleusercontent.com/-EHVdgtYCCGk/VoCqwOvi2UI/AAAAAAAAOyM/hP-BrtyYwBw/s512-Ic42/snapshot10.png "Vertical Box")

## Vertical box with fullbleed item
    .vertical-box {
      box: vertical;
    }

    .fullbleed {
      box-item: flex-1;
    }
![Vertical Box with one fullbleed item](https://lh3.googleusercontent.com/-iO2WxZJB7tQ/VoCr3py-M_I/AAAAAAAAOyY/MJ0CNj0ogYQ/s512-Ic42/snapshot11.png "Vertical box with fullbleed item")

## [Changelog] (./CHANGELOG.md "Changelog")
## [License](./LICENSE "License")
