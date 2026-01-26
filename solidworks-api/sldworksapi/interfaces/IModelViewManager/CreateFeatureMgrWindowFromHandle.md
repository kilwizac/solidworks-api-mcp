---
type: method
interface: IModelViewManager
member: CreateFeatureMgrWindowFromHandle
returns: FeatMgrView
parameters:
  -
    name: BitMapFile
    type: System.String
    description: Fully qualified path to the bitmap file that you want to use for the control
  -
    name: WindowHandle
    type: System.Int32
    description: Handle of the .NET tab control
  -
    name: ToolTip
    type: System.String
    description: Text for the ToolTip
  -
    name: WhichPane
    type: System.Int32
    description: Pane to use as defined in swFeatMgrPane_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IModelViewManager.DisplayWindowFromHandle
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - net
  - controls
  - createfeaturemgrwindowfromhandle
  - imodelviewmanager
  - model
  - view
  - manager
  - create
  - feature
  - mgr
  - window
  - handle
  - bit
  - map
  - file
  - string
  - int32
  - tool
  - tip
  - which
  - pane
  - feat
---

# IModelViewManager.CreateFeatureMgrWindowFromHandle

Creates a new view in the FeatureManager design tree using the specified .NET tab control.

## Signature

```csharp
FeatMgrView CreateFeatureMgrWindowFromHandle( 
   System.String
BitMapFile
,
   System.Int32
WindowHandle
,
   System.String
ToolTip
,
   System.Int32
WhichPane
)
```
## Parameters

- `BitMapFile` (System.String): Fully qualified path to the bitmap file that you want to use for the control
- `WindowHandle` (System.Int32): Handle of the .NET tab control
- `ToolTip` (System.String): Text for the ToolTip
- `WhichPane` (System.Int32): Pane to use as defined in swFeatMgrPane_e

## Return Value

IFeatMgrView

## Remarks

If your application must be x64 compatible, then use
IModelViewManager::CreateFeatureMgrWindowFromHandlex64
.

## See Also

- `IModelViewManager.DisplayWindowFromHandle`