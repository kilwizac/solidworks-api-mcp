---
type: property
interface: IMeasure
member: Diameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.Radius
keywords:
  - diameter
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

# IMeasure.Diameter

Gets the diameter of the selected circle or cylinder.

## Signature

```csharp
System.Double Diameter {get;}
```
## Parameters

None.

## Return Value

Diameter of the selected circle or cylinder or -1 if this property is invalid for the selected entity

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.Radius`