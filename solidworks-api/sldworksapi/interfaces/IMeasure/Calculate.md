---
type: method
interface: IMeasure
member: Calculate
returns: System.Boolean
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of entities to measure; if NULL, then this method measures the selected entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - calculate
  - imeasure
  - measure
  - entities
  - object
  - boolean
  - selected
  - vb
  - net
  - vba
---

# IMeasure.Calculate

Measures the selected or specified entities.

## Signature

```csharp
System.Boolean Calculate( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of entities to measure; if NULL, then this method measures the selected entities

## Return Value

True if the specified or selected entities are valid types and combination , false if not

## Examples

- Measure Selected Entities (C#) (Measure_Selected_Entities_Example_CSharp.htm)
- Measure Selected Entities (VB.NET) (Measure_Selected_Entities_Example_VBNET.htm)
- Measure Selected Entities (VBA) (Measure_Selected_Entities_Example_VB.htm)