import { Component }                    from '@angular/core';
import { Router }                       from '@angular/router';

@Component({
    selector: 'app',
    templateUrl:'app.html'
})

export class AppComponent  {

    public menu: Object[] = [
        { name: 'Forms', icon: 'assignment ind', link: '/forms'},
        { name: 'Buttons', icon: 'assignment ind', link: '/buttons'},
        { name: 'Icons', icon: 'assignment ind', link: '/icons' },
        { name: 'Grid', icon: 'assignment ind', link: '/grid'},
        { name: 'Lists', icon: 'assignment ind', link: '/lists'},
        { name: 'Tabs', icon: 'assignment ind', link: '/tabs'},
        { name: 'Sliders', icon: 'assignment ind', link: '/sliders'},
        { name: 'Spinners', icon: 'assignment ind', link: '/spinners'}
    ];

    constructor( private router: Router) {}

    public navigate( link: string) {
        this.router.navigate([link]);
        return false;
    }
}
