---
type: method
interface: IWeldSymbol
member: GetSymmetric
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getsymmetric
  - iweldsymbol
  - weld
  - symbol
  - symmetric
  - int32
---

# IWeldSymbol.GetSymmetric

Gets whether this weld symbol is a symmetric weld.

## Signature

```csharp
System.Int32 GetSymmetric()
```
## Parameters

None.

## Return Value

Value indicating whether this is a symmetric weld, and if not, whether the dashed line is above or below the horizontal line as defined in swWeldSymbolSymmetric_e

## Remarks

To set a weld symbol to a symmetric weld, use
IWeldSymbol::SetSymmetric
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)