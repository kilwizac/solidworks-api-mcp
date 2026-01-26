---
type: method
interface: ILibraryFormToolFeatureData
member: OverrideDocumentSettings
returns: void
parameters:
  -
    name: OverrideSettings
    type: System.Boolean
    description: True to override the options set in Tools > Options > Document Properties > Sheet Metal , false to not (see Remarks )
  -
    name: ShowPunch
    type: System.Boolean
    description: True to display the cut of this forming tool when the part is flattened, false to not (see Remarks )
  -
    name: ShowProfile
    type: System.Boolean
    description: True to display the placement sketch of this forming tool when the part is flattened, false to not (see Remarks )
  -
    name: ShowCenter
    type: System.Boolean
    description: True to display the center mark where this forming tool is located in the flat pattern, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFormToolFeatureData.OverrideSettings
  - ILibraryFormToolFeatureData.ShowCenter
  - ILibraryFormToolFeatureData.ShowProfile
  - ILibraryFormToolFeatureData.ShowPunch
keywords:
  - overridedocumentsettings
  - ilibraryformtoolfeaturedata
  - library
  - form
  - tool
  - feature
  - data
  - override
  - document
  - settings
  - boolean
  - show
  - punch
  - profile
  - center
  - void
---

# ILibraryFormToolFeatureData.OverrideDocumentSettings

Specifies the flat pattern visibility options for this forming tool feature.

## Signature

```csharp
void OverrideDocumentSettings( 
   System.Boolean
OverrideSettings
,
   System.Boolean
ShowPunch
,
   System.Boolean
ShowProfile
,
   System.Boolean
ShowCenter
)
```
## Parameters

- `OverrideSettings` (System.Boolean): True to override the options set in Tools > Options > Document Properties > Sheet Metal , false to not (see Remarks )
- `ShowPunch` (System.Boolean): True to display the cut of this forming tool when the part is flattened, false to not (see Remarks )
- `ShowProfile` (System.Boolean): True to display the placement sketch of this forming tool when the part is flattened, false to not (see Remarks )
- `ShowCenter` (System.Boolean): True to display the center mark where this forming tool is located in the flat pattern, false to not (see Remarks )

## Return Value

Unknown.

## Remarks

ShowPunch, ShowProfile, and ShowCenter are valid only if OverrideSettings is set to true.

## Examples

- ILibraryFormToolFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILibraryFormToolFeatureData)

## See Also

- `ILibraryFormToolFeatureData.OverrideSettings`
- `ILibraryFormToolFeatureData.ShowCenter`
- `ILibraryFormToolFeatureData.ShowProfile`
- `ILibraryFormToolFeatureData.ShowPunch`