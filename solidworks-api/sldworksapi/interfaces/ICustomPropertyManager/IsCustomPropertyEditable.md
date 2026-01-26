---
type: property
interface: ICustomPropertyManager
member: IsCustomPropertyEditable
returns: System.Boolean
parameters:
  -
    name: PropertyName
    type: System.String
    description: Custom property name
  -
    name: ConfigurationName
    type: System.String
    description: Configuration name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - iscustompropertyeditable
  - icustompropertymanager
  - custom
  - manager
  - editable
  - name
  - string
  - configuration
  - boolean
  - properties
  - vba
  - vb
  - net
readonly: null
---

# ICustomPropertyManager.IsCustomPropertyEditable

Gets whether the specified custom property is editable in the specified configuration.

## Signature

```csharp
System.Boolean IsCustomPropertyEditable( 
   System.String
PropertyName
,
   System.String
ConfigurationName
)
```
## Parameters

- `PropertyName` (System.String): Custom property name
- `ConfigurationName` (System.String): Configuration name

## Return Value

True if the custom property is editable, false if not

## Remarks

Use
ICustomPropertyManager::GetNames
to populate PropertyName.

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Configuration (VB.NET) (Get_Custom_Properties_for_Configuration_Example_VBNET.htm)
- Get Custom Properties for Configuration (C#) (Get_Custom_Properties_for_Configuration_Example_CSharp.htm)