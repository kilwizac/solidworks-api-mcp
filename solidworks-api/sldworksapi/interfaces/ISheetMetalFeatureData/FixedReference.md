---
type: property
interface: ISheetMetalFeatureData
member: FixedReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - fixed
  - face
  - edge
  - fixedreference
  - feature
  - data
  - reference
  - object
  - part
  - vba
readonly: null
---

# ISheetMetalFeatureData.FixedReference

Gets or sets the fixed face or edge for this sheet metal feature.

## Signature

```csharp
System.Object FixedReference {get; set;}
```
## Parameters

None.

## Return Value

Fixed reference entity (edge or face)

## Remarks

To access the fixed reference of a sheet metal feature in sheet metal models created in SOLIDWORKS 2013 or later, follow the examples of
IModelDocExtension::GetTemplateSheetMetal
.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Get Fixed Face of Sheet Metal Part (VBA) (Get_Fixed_Face_of_Sheet_Metal_Part_Example_VB.htm)