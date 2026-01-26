---
type: method
interface: IPartDoc
member: SetLineWidth
returns: void
parameters:
  -
    name: Width
    type: System.Int32
    description: Line thickness or weight as defined in swLineWeights_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.SetLineColor
  - IPartDoc.SetLineStyle
keywords:
  - style
  - lines
  - parts
  - see
  - also
  - ipartdoc
  - widths
  - setlinewidth
  - part
  - doc
  - line
  - width
  - int32
  - void
---

# IPartDoc.SetLineWidth

Sets the thickness or weight for the lines in the part document.

## Signature

```csharp
void SetLineWidth( 
   System.Int32
Width
)
```
## Parameters

- `Width` (System.Int32): Line thickness or weight as defined in swLineWeights_e

## Return Value

Unknown.

## See Also

- `IPartDoc.SetLineColor`
- `IPartDoc.SetLineStyle`