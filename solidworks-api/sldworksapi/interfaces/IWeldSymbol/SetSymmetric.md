---
type: method
interface: IWeldSymbol
member: SetSymmetric
returns: System.Boolean
parameters:
  -
    name: Symmetric
    type: System.Int32
    description: Value indicating whether this should be a symmetric weld, and if not, whether the dashed line is above or below the horizontal line as defined in swWeldSymbolSymmetric_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setsymmetric
  - iweldsymbol
  - weld
  - symbol
  - symmetric
  - int32
  - boolean
---

# IWeldSymbol.SetSymmetric

Sets whether this weld symbol is a symmetric weld.

## Signature

```csharp
System.Boolean SetSymmetric( 
   System.Int32
Symmetric
)
```
## Parameters

- `Symmetric` (System.Int32): Value indicating whether this should be a symmetric weld, and if not, whether the dashed line is above or below the horizontal line as defined in swWeldSymbolSymmetric_e

## Return Value

Unknown.

## Remarks

To get whether a weld symbol is a symmetric weld, use
IWeldSymbol::GetSymmetric
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)