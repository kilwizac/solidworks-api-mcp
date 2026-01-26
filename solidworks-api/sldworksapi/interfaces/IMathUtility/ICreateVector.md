---
type: method
interface: IMathUtility
member: ICreateVector
returns: MathVector
parameters:
  -
    name: ArrayDataIn
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles representing the x,y,z components of the vector VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathUtility.CreateVector
keywords:
  - math
  - vector
  - see
  - imathvector
  - icreatevector
  - imathutility
  - utility
  - create
  - array
  - data
  - double
---

# IMathUtility.ICreateVector

Creates a math vector.

## Signature

```csharp
MathVector ICreateVector( 
   ref System.Double
ArrayDataIn
)
```
## Parameters

- `ArrayDataIn` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles representing the x,y,z components of the vector VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Newly created math vector or NULL if the operation fails

## See Also

- `IMathUtility.CreateVector`