---
type: method
interface: ISketchBlockInstance
member: SetAttributeValue
returns: System.Boolean
parameters:
  -
    name: TagName
    type: System.String
    description: Tag name of this attribute
  -
    name: Value
    type: System.String
    description: Value for this attribute
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - attribute
  - see
  - also
  - iattribute
  - blocks
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - attributes
  - setattributevalue
  - sketch
  - block
  - instance
  - value
  - tag
  - name
  - string
  - boolean
---

# ISketchBlockInstance.SetAttributeValue

Sets the }}-->value of the specified attribute for this block instance.

## Signature

```csharp
System.Boolean SetAttributeValue( 
   System.String
TagName
,
   System.String
Value
)
```
## Parameters

- `TagName` (System.String): Tag name of this attribute
- `Value` (System.String): Value for this attribute

## Return Value

True if the attribute's value is set, false if not

## Remarks

Attributes are string notes that have tag names and are not read-only.
Use
ISketchBlockInstance::GetAttributes
or
ISketchBlockInstance::IGetAttributes
to the get attributes for this block instance. Use
ISketchBlockInstance::GetAttributeValue
to get an attribute's value.