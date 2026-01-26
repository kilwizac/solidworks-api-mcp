---
type: method
interface: ICustomPropertyManager
member: Set2
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the existing custom property
  -
    name: FieldValue
    type: System.String
    description: Value for the existing custom property
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Add3
  - ICustomPropertyManager.Get5
  - ICustomPropertyManager.GetAll2
keywords:
  - set2
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - value
  - int32
  - properties
  - configuration
  - vba
  - vb
  - net
---

# ICustomPropertyManager.Set2

Sets the value for the specified custom property.

## Signature

```csharp
System.Int32 Set2( 
   System.String
FieldName
,
   System.String
FieldValue
)
```
## Parameters

- `FieldName` (System.String): Name of the existing custom property
- `FieldValue` (System.String): Value for the existing custom property

## Return Value

Result code as defined in swCustomInfoSetResult_e

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Configuration (VB.NET) (Get_Custom_Properties_for_Configuration_Example_VBNET.htm)
- Get Custom Properties for Configuration (C#) (Get_Custom_Properties_for_Configuration_Example_CSharp.htm)

## See Also

- `ICustomPropertyManager.Add3`
- `ICustomPropertyManager.Get5`
- `ICustomPropertyManager.GetAll2`