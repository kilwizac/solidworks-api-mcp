---
type: method
interface: IAttribute
member: GetDefinition
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttribute.IGetDefinition
keywords:
  - getdefinition
  - iattribute
  - attribute
  - definition
  - object
---

# IAttribute.GetDefinition

Gets the definition of this attribute.

## Signature

```csharp
System.Object GetDefinition()
```
## Parameters

None.

## Return Value

Object for the attribute definition

## Remarks

SOLIDWORKS generates all attribute instances from an
IAttribute
object. The object is the mold that gives the attribute its parameters and default values.

## See Also

- `IAttribute.IGetDefinition`