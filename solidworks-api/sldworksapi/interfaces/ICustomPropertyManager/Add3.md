---
type: property
interface: ICustomPropertyManager
member: Add3
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of custom property
  -
    name: FieldType
    type: System.Int32
    description: Type of custom property as defined in swCustomInfoType_e
  -
    name: FieldValue
    type: System.String
    description: Value of custom property
  -
    name: OverwriteExisting
    type: System.Int32
    description: Overwrite option as defined in swCustomPropertyAddOption_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Delete2
  - ICustomPropertyManager.Set2
keywords:
  - add3
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - type
  - int32
  - value
  - overwrite
  - existing
  - properties
  - configuration
  - vba
  - vb
  - net
readonly: null
---

# ICustomPropertyManager.Add3

Adds a custom property to a configuration or model document.

## Signature

```csharp
System.Int32 Add3( 
   System.String
FieldName
,
   System.Int32
FieldType
,
   System.String
FieldValue
,
   System.Int32
OverwriteExisting
)
```
## Parameters

- `FieldName` (System.String): Name of custom property
- `FieldType` (System.Int32): Type of custom property as defined in swCustomInfoType_e
- `FieldValue` (System.String): Value of custom property
- `OverwriteExisting` (System.Int32): Overwrite option as defined in swCustomPropertyAddOption_e

## Return Value

Result code as defined in swCustomInfoAddResult_e

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Configuration (VB.NET) (Get_Custom_Properties_for_Configuration_Example_VBNET.htm)
- Get Custom Properties for Configuration (C#) (Get_Custom_Properties_for_Configuration_Example_CSharp.htm)

## See Also

- `ICustomPropertyManager.Delete2`
- `ICustomPropertyManager.Set2`