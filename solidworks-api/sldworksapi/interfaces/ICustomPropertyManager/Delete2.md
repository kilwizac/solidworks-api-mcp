---
type: method
interface: ICustomPropertyManager
member: Delete2
returns: System.Int32
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.Add3
keywords:
  - delete2
  - icustompropertymanager
  - custom
  - manager
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

# ICustomPropertyManager.Delete2

Deletes the specified custom property.

## Signature

```csharp
System.Int32 Delete2( 
   System.String
FieldName
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property to delete

## Return Value

Result code as defined in swCustomInfoDeleteResult_e

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Configuration (VB.NET) (Get_Custom_Properties_for_Configuration_Example_VBNET.htm)
- Get Custom Properties for Configuration (C#) (Get_Custom_Properties_for_Configuration_Example_CSharp.htm)

## See Also

- `ICustomPropertyManager.Add3`