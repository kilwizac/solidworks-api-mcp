---
type: method
interface: IPropertyManagerPage2
member: SetTitleBitmapx64
returns: System.Boolean
parameters:
  -
    name: ModuleHandle
    type: System.Int64
    description: Module handle of the application instance that contains the bitmap resource (see Remarks )
  -
    name: Identifier
    type: System.Int32
    description: Resource ID of the bitmap (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - settitlebitmapx64
  - ipropertymanagerpage2
  - manager
  - page2
  - title
  - bitmapx64
  - module
  - handle
  - int64
  - identifier
  - int32
  - boolean
---

# IPropertyManagerPage2.SetTitleBitmapx64

Sets the bitmap to display in the title of this PropertyManager page.

## Signature

```csharp
System.Boolean SetTitleBitmapx64( 
   System.Int64
ModuleHandle
,
   System.Int32
Identifier
)
```
## Parameters

- `ModuleHandle` (System.Int64): Module handle of the application instance that contains the bitmap resource (see Remarks )
- `Identifier` (System.Int32): Resource ID of the bitmap (see Remarks )

## Return Value

True if successful, false if not

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software. Its intended use is for SOLIDWORKS PropertyManager .NET add-ins. For VBA PropertyManager pages, use
IPropertyManagerPage2::SetTitleBitmap2
.
You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
for details.
The bitmap:
must have less than 256 colors. Its recommended size is 18 - 22 cells wide. However, the bitmap can be any size, as long as it fits on the title bar.
appears transparent by mapping any white (RGB(255,255,255)) cells to the current PropertyManager page title bar background color. Remember the special use of this color as you design your bitmap.
must be a resource in your Visual Studio application.  You must discover its resource ID before you can specify Identifier.
Specify ModuleHandle using the add-in ID.
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