---
type: method
interface: IModeler
member: SetTolerances
returns: System.Boolean
parameters:
  -
    name: ToleranceIDArray
    type: System.Int32
    description: Type of tolerance you want to set as defined in swTolerances_e
  -
    name: ToleranceValueArray
    type: System.Double
    description: New tolerance value in meters for the specified tolerance type
  -
    name: NumTol
    type: System.Int32
    description: Original value of the specified tolerance type
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - settolerances
  - imodeler
  - modeler
  - tolerances
  - tolerance
  - id
  - array
  - int32
  - value
  - double
  - num
  - tol
  - boolean
---

# IModeler.SetTolerances

Obsolete. Superseded by IModeler::GetToleranceValue and IModeler::SetToleranceValue.

## Signature

```csharp
System.Boolean SetTolerances( 
   ref System.Int32
ToleranceIDArray
,
   ref System.Double
ToleranceValueArray
,
   System.Int32
NumTol
)
```
## Parameters

- `ToleranceIDArray` (System.Int32): Type of tolerance you want to set as defined in swTolerances_e
- `ToleranceValueArray` (System.Double): New tolerance value in meters for the specified tolerance type
- `NumTol` (System.Int32): Original value of the specified tolerance type

## Return Value

Unknown.