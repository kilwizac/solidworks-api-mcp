---
type: property
interface: IDowelSymbol
member: Flipped
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - flipped
  - idowelsymbol
  - dowel
  - symbol
  - boolean
  - flip
  - pin
  - vba
  - vb
  - net
readonly: null
---

# IDowelSymbol.Flipped

Gets or sets whether to flip this dowel symbol.

## Signature

```csharp
System.Boolean Flipped {get; set;}
```
## Parameters

None.

## Return Value

True if the dowel is flipped, false if it is not

## Remarks

Call
IModelDoc2::EditRebuild3
after flipping the dowel pin symbol.

## Examples

- Flip Dowel Pin Symbol (VBA) (Flip_Dowel_Pin_Symbol_Example_VB.htm)
- Flip Dowel Pin Symbol (C#) (Flip_Dowel_Pin_Symbol_Example_CSharp.htm)
- Flip Dowel Pin Symbol (VB.NET) (Flip_Dowel_Pin_Symbol_Example_VBNET.htm)