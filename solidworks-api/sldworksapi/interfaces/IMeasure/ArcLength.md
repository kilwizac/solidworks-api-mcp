---
type: property
interface: IMeasure
member: ArcLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMeasure.ArcOption
keywords:
  - arclength
  - imeasure
  - measure
  - arc
  - length
  - double
  - selected
  - entities
  - vb
  - net
  - vba
readonly: true
---

# IMeasure.ArcLength

Gets the length of the selected arc.

## Signature

```csharp
System.Double ArcLength {get;}
```
## Parameters

None.

## Return Value

Length of arc or -1 if this property is invalid for the selected entity

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)

## See Also

- `IMeasure.ArcOption`