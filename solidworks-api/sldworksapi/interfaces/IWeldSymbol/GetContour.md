---
type: method
interface: IWeldSymbol
member: GetContour
returns: System.Int32
parameters:
  -
    name: Top
    type: System.Boolean
    description: If true, then get the contour setting for the portion of the symbol above the horizontal line; if false, then get the contour setting for the portion of the symbol below the horizontal line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getcontour
  - iweldsymbol
  - weld
  - symbol
  - contour
  - top
  - boolean
  - int32
---

# IWeldSymbol.GetContour

Gets the contour settings for this weld symbol.

## Signature

```csharp
System.Int32 GetContour( 
   System.Boolean
Top
)
```
## Parameters

- `Top` (System.Boolean): If true, then get the contour setting for the portion of the symbol above the horizontal line; if false, then get the contour setting for the portion of the symbol below the horizontal line

## Return Value

Contour setting as defined by swWeldSymbolContourTypes_e

## Remarks

To set the contour settings for a weld symbol, use
IWeldSymbol::SetText
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)