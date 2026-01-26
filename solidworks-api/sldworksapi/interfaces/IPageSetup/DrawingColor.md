---
type: property
interface: IPageSetup
member: DrawingColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - drawings
related: []
keywords:
  - print
  - drawings
  - page
  - setup
  - see
  - also
  - ipagesetup
  - drawingcolor
  - drawing
  - color
  - int32
readonly: null
---

# IPageSetup.DrawingColor

Sets the color of the drawing for printing.

## Signature

```csharp
System.Int32 DrawingColor {get; set;}
```
## Parameters

None.

## Return Value

Color of drawing for printing as defined in swPageSetupDrawingColor_e

## Remarks

This method can only be set with an application-level (
IModelDocExtension::AppPageSetup
) or document-level (
IModelDoc2::PageSetup
or
IModelDoc2::IPageSetup
) object. This method is not available at the sheet level.