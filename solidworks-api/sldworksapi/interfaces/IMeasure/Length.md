---
type: property
interface: IMeasure
member: Length
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.LengthDecimalPlaces
  - IMeasure.TotalLength
keywords:
  - length
  - imeasure
  - measure
  - double
  - selected
  - entities
  - vb
  - net
  - vba
readonly: true
---

# IMeasure.Length

Gets the length of the selected entity.

## Signature

```csharp
System.Double Length {get;}
```
## Parameters

None.

## Return Value

Length of the selected entity or -1 if this property is invalid for the selected entity

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.LengthDecimalPlaces`
- `IMeasure.TotalLength`