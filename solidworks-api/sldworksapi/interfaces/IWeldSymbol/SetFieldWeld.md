---
type: method
interface: IWeldSymbol
member: SetFieldWeld
returns: System.Boolean
parameters:
  -
    name: FieldWeld
    type: System.Int32
    description: Value indicating whether this is to be a field or site weld, and, if so, whether the flag points up or down as defined in swWeldSymbolField_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setfieldweld
  - iweldsymbol
  - weld
  - symbol
  - field
  - int32
  - boolean
---

# IWeldSymbol.SetFieldWeld

Sets the field or site weld property of this weld symbol.

## Signature

```csharp
System.Boolean SetFieldWeld( 
   System.Int32
FieldWeld
)
```
## Parameters

- `FieldWeld` (System.Int32): Value indicating whether this is to be a field or site weld, and, if so, whether the flag points up or down as defined in swWeldSymbolField_e

## Return Value

True if the field or site weld setting is set successfully, false if not

## Remarks

To retrieve the field or site weld property of a weld symbol, use
IWeldSymbol::GetFieldWeld
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)