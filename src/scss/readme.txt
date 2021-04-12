===============================================================================
- Sass FOLDER STRUCTURE
- Be sure to update this everytime you add a new folder/file
- Observe alphabetical order and proper alignment
- More reading:
  - https://www.sitepoint.com/architecture-sass-project/
  - https://sass-guidelin.es/#the-7-1-pattern
===============================================================================

sass/ 
| 
|– base/                             # Contains base files that should always be imported
|   |– _default-style.scss           # Site-specific styles
|   |- _global.scss                  # Global class styles that are used repetitively
|   ...                              # Etc… 
| 
|– components/                       # Contains components or modules that may be reused within the project
|   |– _bem-block.scss               # A sample BEM block
|   |– _buttons.scss                 # Button component
|   ...                              # Etc… 
| 
|– layout/                           # Contains site layouts
|   |– _footer.scss                  # Footer 
|   |– _header.scss                  # Header 
|   ...                              # Etc… 
| 
|– pages/                            # Contains page-specific files
|   ...                              # Etc… 
|
|– themes/                           # Contains files for any theming purposes
|   ...                              # Etc… 
|
|– utilities/                        # Contains all Sass tools and utilities that are used across the project
|   |– _variables.scss               # Variables
|   |– _mixins.scss                  # Mixins
|   ...                              # Etc… 
| 
|– vendors/                          # Contains all Sass files from external libraries and frameworks
|   |– bootstrap                     # Bootstrap 
|   ...                              # Etc… 
| 
|– main.scss                         # Primary Sass file

===============================================================================
- Notes for Sass coding best practices for this project
- You can add any notes as you like for a unified approach in coding
===============================================================================

1. Use hyphen '-' in Sass variables, purpose of this is to be consistent in variable declaration.

	ex; $my-variable
    
2. Use mixins/placeholders/helpers if a rule declaration will be used at least 2 times in an entire project.

3. As much as possible, separate section of codes into partials, for a more modular approach and maintainability issues.

4. As much as possible, try to use 'rem' and 'em' and '%' properly for units, this will help us in our goal for a responsive website.

	ex; font-size: 1.2rem;
			width: 80%;
			margin: 2em 1em;
			
			- More reading: https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984

5. Be sure to compress or minify final css output when it's time to upload to production.

6. Regarding the use of placeholder or mixin -- if you need variables/parameters, use a mixin. Otherwise, extend a placeholder/helper.

7. Use class instead of ID for styling purposes, we reserve the use of IDs for special functionality like javascript events. 
      
8. Be consistent with indentation, preferably go for soft tabs (2-space indentation) rather than going for a full tab.

	e.g
			.header {
				background: LightCyan;
			}
        
9. Isolate hacks, quickfixes, questionable techniques, sass than ideal CSS tricks to override settings (e.g. !important) in _shame.scss so that main codebase is clean. Document well on why there is a need to do it. 
    
	e.g.
		.clear-property {
			font-weight: normal !important;
		}
        
Purpose:
	- Make the hacks stick out like a sore thumb and makes developers aware that their hacks are made very visible and what they're doing is hacky thus forces them to document what the problem was, how the hack fixes it, and how they might fix it for real given more time.
	- Makes hacks easier to isolate and fix.

	-In your global stylesheet, @import a _shame.scss file last.
	
10. Open sass/components/_sample-mediaquery-usage.scss for example on how to use mediaqueries in this project.