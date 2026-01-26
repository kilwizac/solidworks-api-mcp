---
type: method
interface: IPartDoc
member: InsertPart3
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the part file to insert
  -
    name: Options
    type: System.Int32
    description: Insertion options as defined in swInsertPartOptions_e
  -
    name: ConfigurationName
    type: System.String
    description: Name of FileName's configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IDerivedPartFeatureData
keywords:
  - derived
  - parts
  - see
  - also
  - ipartdoc
  - insert
  - insertpart3
  - part
  - doc
  - part3
  - file
  - name
  - string
  - options
  - int32
  - configuration
  - feature
  - modify
  - vba
  - vb
  - net
---

# IPartDoc.InsertPart3

Inserts the specified part in the specified configuration into this part.

## Signature

```csharp
Feature InsertPart3( 
   System.String
FileName
,
   System.Int32
Options
,
   System.String
ConfigurationName
)
```
## Parameters

- `FileName` (System.String): Name of the part file to insert
- `Options` (System.Int32): Insertion options as defined in swInsertPartOptions_e
- `ConfigurationName` (System.String): Name of FileName's configuration

## Return Value

Inserted feature

## Remarks

This method inserts the specified part at the origin of this part. To position the inserted part at a different location or orientation or both, use
IFeatureManager::InsertMoveCopyBody2
.

## Examples

- Modify Derived Part (VBA) (Modify_Derived_Part_Example_VB.htm)
- Modify Derived Part (VB.NET) (Modify_Derived_Part_Example_VBNET.htm)
- Modify Derived Part (C#) (Modify_Derived_Part_Example_CSharp.htm)

## See Also

- `IDerivedPartFeatureData`