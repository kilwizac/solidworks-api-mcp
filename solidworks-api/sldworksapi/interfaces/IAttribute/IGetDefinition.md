---
type: method
interface: IAttribute
member: IGetDefinition
returns: AttributeDef
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - igetdefinition
  - iattribute
  - attribute
  - definition
  - def
---

# IAttribute.IGetDefinition

Gets the definition of this attribute.

## Signature

```csharp
AttributeDef IGetDefinition()
```
## Parameters

None.

## Return Value

IAttributeDef

## Remarks

SOLIDWORKS generates all attribute instances from an
IAttribute
object. The object is the mold that gives the attribute its parameters and default values.