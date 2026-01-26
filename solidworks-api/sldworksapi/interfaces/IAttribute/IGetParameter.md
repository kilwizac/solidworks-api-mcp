---
type: method
interface: IAttribute
member: IGetParameter
returns: Parameter
parameters:
  -
    name: NameIn
    type: System.String
    description: Name of the parameter
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttribute.GetParameter
keywords:
  - igetparameter
  - iattribute
  - attribute
  - parameter
  - name
  - string
---

# IAttribute.IGetParameter

Gets the specified parameter on this attribute.

## Signature

```csharp
Parameter IGetParameter( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Name of the parameter

## Return Value

IParameter

## See Also

- `IAttribute.GetParameter`