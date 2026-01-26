---
type: method
interface: IAssemblyDoc
member: InsertJoin2
returns: System.Boolean
parameters:
  -
    name: HideParts
    type: System.Boolean
    description: True hides the original components after the join is complete, false shows them
  -
    name: ForceContact
    type: System.Boolean
    description: True joins any coincident faces and intruding volumes, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IJoinFeatureData
keywords:
  - joined
  - parts
  - see
  - also
  - ijoinfeaturedata
  - create
  - insertjoin2
  - iassemblydoc
  - assembly
  - doc
  - insert
  - join2
  - hide
  - boolean
  - force
  - contact
  - join
  - feature
  - vb
  - net
  - vba
---

# IAssemblyDoc.InsertJoin2

Constructs a feature from merged selected components.

## Signature

```csharp
System.Boolean InsertJoin2( 
   System.Boolean
HideParts
,
   System.Boolean
ForceContact
)
```
## Parameters

- `HideParts` (System.Boolean): True hides the original components after the join is complete, false shows them
- `ForceContact` (System.Boolean): True joins any coincident faces and intruding volumes, false does not

## Return Value

True if feature creation was successful, false if it was not

## Remarks

When you use this method, SOLIDWORKS must be in Edit Part mode for the target part. You must also preselect the component parts to be merged into the edited part.

## Examples

- Insert Join Feature (C#) (Insert_Join_Feature_Example_CSharp.htm)
- Insert Join Feature (VB.NET) (Insert_Join_Feature_Example_VBNET.htm)
- Insert Join Feature (VBA) (Insert_Join_Feature_Example_VB.htm)

## See Also

- `IJoinFeatureData`