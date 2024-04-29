export const NEW_LEAD = 'new'
 
export const QUALIFIED = 'contacted'
export const CONTACTED = 'qualified'
export const CLOSED = 'closed'
export const CONVERTED ='converted'
 
export const HOT = 'hot'
export const WARM = 'warm'
export const COLD = 'cold'
export const AZURE_COLOR = '#AFEEEE'
export const BEIGE ='#A5A5A5'
export const GREEN ='#98FB98'
export const YELLOWGREEN="#9ACD32"
export const DARKGREEN="#7FFFD4"
export const ORANGERED="#ff4500"
export const ORANGE="#FFA500"
export const SKYBLUE="#87CEEB"
 
export const background_color_map = {
    [NEW_LEAD]: AZURE_COLOR,
    [QUALIFIED]: GREEN,
 
    [CONTACTED]: YELLOWGREEN,
    [CLOSED]: DARKGREEN,
    [HOT]: ORANGERED,
    [CONVERTED]:'#86ed80',
 
    [WARM]: ORANGE,
    [COLD]: SKYBLUE
 
 
  }
 
  export const text_color_map = {
    [NEW_LEAD]: "#000000",
    [QUALIFIED]: "#000000",
    [CONVERTED]:'#000000',
 
    [CONTACTED]: "#000000",
    [CLOSED]: "#000000",
    [HOT]: "#FFFFFF",
 
    [WARM]: "#000000",
    [COLD]: "#000000"
 
 
  }