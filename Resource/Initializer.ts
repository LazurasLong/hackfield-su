/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Resource 
{
    /**
     * 
     */
    export class Initializer extends Abstract.ContextAware
    {
        /**
         * loads every picture from an array
         */
        public loadPictures(): Initializer
        {
            for (var k in Config.Default.imageData)
            {
                if (Config.Default.imageData.hasOwnProperty(k))
                {
                    this.context.load.image(k, Config.Default.imageData[k]);
                }
            }

            return this;
        }
    }
}