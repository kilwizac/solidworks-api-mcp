---
type: property
interface: ICustomPropertyManager
member: LinkProperty
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property to link or unlink
  -
    name: FieldLink
    type: System.Boolean
    description: True to link the custom property, false to unlink it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.LinkAll
keywords:
  - linkproperty
  - icustompropertymanager
  - custom
  - manager
  - link
  - field
  - name
  - string
  - boolean
  - int32
readonly: null
---

# ICustomPropertyManager.LinkProperty

Sets whether to link or unlink the specified custom property to or from its parent part.

## Signature

```csharp
System.Int32 LinkProperty( 
   System.String
FieldName
,
   System.Boolean
FieldLink
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property to link or unlink
- `FieldLink` (System.Boolean): True to link the custom property, false to unlink it

## Return Value

Result code as defined in swCustomLinkSetResult_e

## Remarks

This method is valid for cut-list, feature, model, and configuration custom properties.

## See Also

- `ICustomPropertyManager.LinkAll`