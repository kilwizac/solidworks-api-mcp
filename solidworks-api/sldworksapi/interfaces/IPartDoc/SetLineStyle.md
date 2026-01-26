---
type: method
interface: IPartDoc
member: SetLineStyle
returns: void
parameters:
  -
    name: StyleName
    type: System.String
    description: Style or font for the line as defined in swLineStyles_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.SetLineColor
  - IPartDoc.SetLineWidth
keywords:
  - style
  - lines
  - parts
  - see
  - also
  - ipartdoc
  - styles
  - setlinestyle
  - part
  - doc
  - line
  - name
  - string
  - void
---

# IPartDoc.SetLineStyle

Sets the style or font for the lines in the part document.

## Signature

```csharp
void SetLineStyle( 
   System.String
StyleName
)
```
## Parameters

- `StyleName` (System.String): Style or font for the line as defined in swLineStyles_e

## Return Value

Unknown.

## See Also

- `IPartDoc.SetLineColor`
- `IPartDoc.SetLineWidth`