---
type: method
interface: ICustomPropertyManager
member: GetType2
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property whose type to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Get5
  - ICustomPropertyManager.GetNames
keywords:
  - gettype2
  - icustompropertymanager
  - custom
  - manager
  - type2
  - field
  - name
  - string
  - int32
  - properties
  - configuration
  - vba
  - vb
  - net
---

# ICustomPropertyManager.GetType2

Gets the type of the specified custom property for a configuration or model document.

## Signature

```csharp
System.Int32 GetType2( 
   System.String
FieldName
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property whose type to get

## Return Value

Type of custom property as defined in swCustomInfoType_e

## Remarks

This method is not currently implemented for features.

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Configuration (VB.NET) (Get_Custom_Properties_for_Configuration_Example_VBNET.htm)
- Get Custom Properties for Configuration (C#) (Get_Custom_Properties_for_Configuration_Example_CSharp.htm)

## See Also

- `ICustomPropertyManager.Get5`
- `ICustomPropertyManager.GetNames`