---
type: method
interface: IModeler
member: UnsetTolerances
returns: System.Boolean
parameters:
  -
    name: ToleranceIDArray
    type: System.Int32
    description: Array specifying the tolerances to reset as defined in swTolerances_e
  -
    name: NumTol
    type: System.Int32
    description: Number of tolerance types you are resetting; this value should correspond to the number of elements in the ToleranceIDArray array
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.GetToleranceValue
  - IModeler.SetToleranceValue
keywords:
  - tolerance
  - unsettolerances
  - imodeler
  - modeler
  - unset
  - tolerances
  - id
  - array
  - int32
  - num
  - tol
  - boolean
---

# IModeler.UnsetTolerances

Sets the tolerances back to system settings.

## Signature

```csharp
System.Boolean UnsetTolerances( 
   ref System.Int32
ToleranceIDArray
,
   System.Int32
NumTol
)
```
## Parameters

- `ToleranceIDArray` (System.Int32): Array specifying the tolerances to reset as defined in swTolerances_e
- `NumTol` (System.Int32): Number of tolerance types you are resetting; this value should correspond to the number of elements in the ToleranceIDArray array

## Return Value

True if the tolerances is reset successfully, false if n

## See Also

- `IModeler.GetToleranceValue`
- `IModeler.SetToleranceValue`