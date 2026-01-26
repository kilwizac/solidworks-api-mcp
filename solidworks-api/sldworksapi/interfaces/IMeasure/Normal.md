---
type: property
interface: IMeasure
member: Normal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.NormalDistance
keywords:
  - normal
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

# IMeasure.Normal

Gets the normal distance (normal to the selected plane) between the selected face and plane.

## Signature

```csharp
System.Double Normal {get;}
```
## Parameters

None.

## Return Value

Normal distance between the selected face and plane or -1 if this property is invalid for the selected entities

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.NormalDistance`