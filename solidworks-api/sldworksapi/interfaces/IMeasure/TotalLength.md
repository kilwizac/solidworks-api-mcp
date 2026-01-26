---
type: property
interface: IMeasure
member: TotalLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.Length
  - IMeasure.LengthDecimalPlaces
keywords:
  - totallength
  - imeasure
  - measure
  - total
  - length
  - double
  - selected
  - entities
  - vb
  - net
  - vba
readonly: true
---

# IMeasure.TotalLength

Gets the total length of the two selected entities.

## Signature

```csharp
System.Double TotalLength {get;}
```
## Parameters

None.

## Return Value

Total length of the two selected entities or -1 if this property is invalid for the selected entities

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.Length`
- `IMeasure.LengthDecimalPlaces`