---
type: method
interface: IDisplayDimension
member: SetLinkedText
returns: System.Int32
parameters:
  -
    name: BstrLinkedText
    type: System.String
    description: Text to link to this display dimension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetLinkedText
  - IDisplayDimension.IsLinked
  - IDisplayDimension.Unlink
keywords:
  - link
  - dimensions
  - setlinkedtext
  - idisplaydimension
  - display
  - dimension
  - linked
  - text
  - bstr
  - string
  - int32
---

# IDisplayDimension.SetLinkedText

Sets the text to link to this display dimension.

## Signature

```csharp
System.Int32 SetLinkedText( 
   System.String
BstrLinkedText
)
```
## Parameters

- `BstrLinkedText` (System.String): Text to link to this display dimension

## Return Value

Error code as defined in swLinkDimensionError_e

## Remarks

Dimension types must be the same, for example: linear to linea , angular to angular, and so on.
Angular dimensions must be in the same quadrant.
Dimensions cannot shared by another named group.
Dimensions with dissimilar ranges cannot be shared.
Dimensions cannot driven by equations, read-only, driven sketch dimensions, or reference dimensions.

## See Also

- `IDisplayDimension.GetLinkedText`
- `IDisplayDimension.IsLinked`
- `IDisplayDimension.Unlink`