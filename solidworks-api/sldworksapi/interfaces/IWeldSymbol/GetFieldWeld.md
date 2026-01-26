---
type: method
interface: IWeldSymbol
member: GetFieldWeld
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getfieldweld
  - iweldsymbol
  - weld
  - symbol
  - field
  - int32
---

# IWeldSymbol.GetFieldWeld

Gets the field or site weld property of this weld symbol.

## Signature

```csharp
System.Int32 GetFieldWeld()
```
## Parameters

None.

## Return Value

Value indicating whether this is a field or site weld, and, if so, whether the flag points up or down as defined in swWeldSymbolField_e

## Remarks

To set the field or site weld property of a weld symbol, use
IWeldSymbol::SetFieldWeld
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)