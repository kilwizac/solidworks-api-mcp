---
type: method
interface: IParameter
member: GetVector
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: x vector value stored on the parameter
  -
    name: Y
    type: System.Double
    description: y vector value stored on the parameter
  -
    name: Z
    type: System.Double
    description: z vector value stored on the parameter
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IParameter.GetVectorVB
  - IParameter.SetVector2
keywords:
  - getvector
  - iparameter
  - parameter
  - vector
  - double
  - void
---

# IParameter.GetVector

Extracts information of type vector from a parameter.

## Signature

```csharp
void GetVector( 
   out System.Double
X
,
   out System.Double
Y
,
   out System.Double
Z
)
```
## Parameters

- `X` (System.Double): x vector value stored on the parameter
- `Y` (System.Double): y vector value stored on the parameter
- `Z` (System.Double): z vector value stored on the parameter

## Return Value

Unknown.

## See Also

- `IParameter.GetVectorVB`
- `IParameter.SetVector2`