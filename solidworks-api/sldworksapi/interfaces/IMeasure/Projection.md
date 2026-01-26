---
type: property
interface: IMeasure
member: Projection
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.ProjectionOption
  - IMeasure.SetProjectionEntity
keywords:
  - projection
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

# IMeasure.Projection

Gets the projected distance between the two selected entities.

## Signature

```csharp
System.Double Projection {get;}
```
## Parameters

None.

## Return Value

Projected distance between the two selected entities or -1 if this property is invalid for the selected entities

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.ProjectionOption`
- `IMeasure.SetProjectionEntity`