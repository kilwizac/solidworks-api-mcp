---
type: property
interface: IMeasure
member: X
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.Y
  - IMeasure.Z
keywords:
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

# IMeasure.X

Gets the x coordinate of the selected point in model space.

## Signature

```csharp
System.Double X {get;}
```
## Parameters

None.

## Return Value

x coordinate of the selected point in model space or -1 if this property is invalid for the selected entity

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.Y`
- `IMeasure.Z`