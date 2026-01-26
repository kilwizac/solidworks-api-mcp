---
type: property
interface: ICustomPropertyManager
member: Count
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - count
  - icustompropertymanager
  - custom
  - manager
  - int32
  - properties
  - configuration
  - vba
  - cut
  - list
  - item
readonly: true
---

# ICustomPropertyManager.Count

Gets the number of custom properties.

## Signature

```csharp
System.Int32 Count {get;}
```
## Parameters

None.

## Return Value

0 or the number of custom properties

## Remarks

Call this method before calling
ICustomPropertyManager::IGetNames
.

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Cut-list Item (VBA) (Get_Custom_Properties_for_Cut-list_Item_Example_VB.htm)