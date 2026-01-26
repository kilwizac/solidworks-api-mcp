---
type: method
interface: IPropertyManagerPage2
member: SetTitleBitmap2
returns: void
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and filename of the bitmap to display in the title of this PropertyManager page
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPage2.Title
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - title
  - settitlebitmap2
  - manager
  - page2
  - bitmap2
  - file
  - path
  - name
  - string
  - void
---

# IPropertyManagerPage2.SetTitleBitmap2

Sets the bitmap to display in the title of this PropertyManager page.

## Signature

```csharp
void SetTitleBitmap2( 
   System.String
FilePathName
)
```
## Parameters

- `FilePathName` (System.String): Path and filename of the bitmap to display in the title of this PropertyManager page

## Return Value

Unknown.

## Remarks

If your application must be x64 compatible, then use
IPropertyManagerPage2::SetTitleBitmapx64
.
You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
for details.
Create the bitmap in the resources of your application. The bitmap must have less than 256 colors. It is accessed via the path and filename passed into this method.
The recommended size for bitmaps is a square from 18- to 22-cells wide. However, the bitmap can be any size, as long as it fits on the title bar.
The bitmap appears transparent by mapping any white (RGB(255,255,255)) cells to the current PropertyManager page title bar background color. Remember the special use of this color as you design your bitmap.
If this method is...
Then the title bar contains...
Used
Specified bitmap starting at the left edge of the PropertyManager title bar, followed by the title bar text (see
ISldWorks::CreatePropertyManagerPage
or
ISldWorks::ICreatePropertyManagerPage
).
Not used
Only the text, centered on the title bar.

## See Also

- `IPropertyManagerPage2.Title`