---
type: property
interface: IMeasure
member: NormalDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.Normal
keywords:
  - normaldistance
  - imeasure
  - measure
  - normal
  - distance
  - double
  - selected
  - entities
  - vb
  - net
  - vba
readonly: true
---

# IMeasure.NormalDistance

Gets the normal distance (normal to the selected plane) between the selected entity and plane.

## Signature

```csharp
System.Double NormalDistance {get;}
```
## Parameters

None.

## Return Value

Normal distance or -1 if this property is invalid for the selected entities

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.Normal`